import { useSearch } from '@faststore/sdk'
import { graphql } from 'gatsby'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Button from 'src/components/ui/Button'
import IconButton from 'src/components/ui/IconButton'
import SlideOver from 'src/components/ui/SlideOver'
import type {
  IStoreSelectedFacet,
  Filter_FacetsFragment,
} from '@generated/graphql'
import Icon from 'src/components/ui/Icon'

import Facets from './Facets'

import './filter.scss'

interface FilterProps {
  facets: Filter_FacetsFragment[]
  /*
   * Control whether the filter modal is open. (mobile only)
   */
  isOpen?: boolean
  /**
   * This function is called whenever the user hits "Escape", clicks outside
   * the filter modal or clicks in close button. (mobile only)
   */
  onDismiss?: () => void
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string
}

type ActiveFacets = {
  facets: string[]
  accordionIndex: number
}

type Callback = () => unknown

function filterFacetsDiff(
  firstFacets: IStoreSelectedFacet[],
  secondFacets: IStoreSelectedFacet[]
) {
  return firstFacets.filter((facet) => {
    const isSameFacet = (f: IStoreSelectedFacet) =>
      f.value === facet.value && f.key === facet.key

    const isFacetPresent = secondFacets.some(isSameFacet)

    return !isFacetPresent
  })
}

function Filter({
  facets,
  onDismiss,
  isOpen = false,
  testId = 'store-filter',
}: FilterProps) {
  const { toggleFacets, toggleFacet, state: searchState } = useSearch()
  const dismissTransition = useRef<Callback | undefined>()

  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const [selectedFacets, setSelectedFacets] = useState<IStoreSelectedFacet[]>(
    [...searchState.selectedFacets] ?? []
  )

  const [activeFacets, setActiveFacets] = useState<ActiveFacets[]>([])
  const filteredFacets = facets.filter((facet) => facet.type === 'BOOLEAN')

  const onAccordionChange = useCallback((index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))

      return
    }

    setIndicesExpanded(new Set(indicesExpanded.add(index)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Ensures all required states are up to date at opening
  useEffect(() => {
    if (isOpen) {
      return
    }

    setActiveFacets([])
    setSelectedFacets([...searchState.selectedFacets])
  }, [isOpen, searchState.selectedFacets])

  // Opens accordion items with active facets
  useEffect(() => {
    // Ensures all the active facets were identified
    if (activeFacets.length !== filteredFacets.length) {
      return
    }

    // Ensures there isn't empty facets
    const selectedActiveFacets = activeFacets.filter(
      (item) => item.facets.length > 0
    )

    // Checks if accordion item is already opened
    selectedActiveFacets.forEach(
      ({ accordionIndex }) =>
        !indicesExpanded.has(accordionIndex) &&
        onAccordionChange(accordionIndex)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, activeFacets])

  const onFacetChange = (item: IStoreSelectedFacet) => {
    const indexToRemove = selectedFacets.findIndex(
      (facet) => facet.value === item.value
    )

    const shouldRemoveFacet = indexToRemove !== -1

    setSelectedFacets((previousSelectedFacets) => {
      if (shouldRemoveFacet) {
        previousSelectedFacets.splice(indexToRemove, 1)

        return [...previousSelectedFacets]
      }

      return [...previousSelectedFacets, item]
    })
  }

  const onAccordionItemMount = (
    index: number,
    values: Filter_FacetsFragment['values']
  ) => {
    // Ensures only one array item for each accordion's item
    if (activeFacets.length >= filteredFacets.length) {
      return
    }

    // Filter current selected facets from API
    const selectedValues = values.filter(({ selected }) => selected)

    activeFacets.push({
      accordionIndex: index,
      facets: selectedValues.map(({ value }) => value),
    })
    setActiveFacets(activeFacets)
  }

  const onApply = () => {
    // Only toggle new facets added and old facets removed and keep the current ones applied
    const facetsToAdd = filterFacetsDiff(
      selectedFacets,
      searchState.selectedFacets
    )

    const facetsToRemove = filterFacetsDiff(
      searchState.selectedFacets,
      selectedFacets
    )

    toggleFacets([...facetsToAdd, ...facetsToRemove])
    dismissTransition.current?.()
  }

  return (
    <>
      <div className="hidden-mobile">
        <Facets
          testId={`desktop-${testId}`}
          selectedFacets={selectedFacets}
          filteredFacets={filteredFacets}
          indicesExpanded={indicesExpanded}
          onFacetChange={toggleFacet}
          onAccordionChange={onAccordionChange}
          onAccordionItemMount={onAccordionItemMount}
        />
      </div>

      <SlideOver
        isOpen={isOpen}
        onDismiss={onDismiss}
        onDismissTransition={(callback) =>
          (dismissTransition.current = callback)
        }
        size="partial"
        direction="rightSide"
        className="filter-modal__content"
      >
        <div className="filter-modal__body">
          <header className="filter-modal__header">
            <h2 className="title-display">Filters</h2>
            <IconButton
              data-testid="filter-modal-button-close"
              classes="filter-modal__button"
              aria-label="Close Filters"
              icon={<Icon name="X" width={32} height={32} />}
              onClick={() => {
                setSelectedFacets(searchState.selectedFacets)
                dismissTransition.current?.()
              }}
            />
          </header>
          <Facets
            testId={`mobile-${testId}`}
            selectedFacets={selectedFacets}
            filteredFacets={filteredFacets}
            indicesExpanded={indicesExpanded}
            onFacetChange={onFacetChange}
            onAccordionChange={onAccordionChange}
            onAccordionItemMount={onAccordionItemMount}
          />
        </div>
        <footer className="filter-modal__footer">
          <Button
            variant="secondary"
            onClick={() => {
              setSelectedFacets([])
            }}
          >
            Clear All
          </Button>
          <Button
            variant="primary"
            data-testid="filter-modal-button-apply"
            onClick={() => onApply()}
          >
            Apply
          </Button>
        </footer>
      </SlideOver>
    </>
  )
}

export const fragment = graphql`
  fragment Filter_facets on StoreFacet {
    key
    label
    type
    values {
      label
      value
      selected
      quantity
    }
  }
`

export default Filter
