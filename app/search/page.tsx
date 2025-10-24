'use client'

import { useSearchParams } from 'next/navigation'
import SearchResults from '@/components/SearchResults'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return <SearchResults query={query} />
}
