'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Filter, Clock, Star, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SearchResult {
  id: number
  type: string
  title: string
  instructor: string
  rating: number
  students: number
  price: string
  duration: string
  category: string
  description: string
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Mock search results - in a real app, this would come from an API
  const mockResults = [
    {
      id: 1,
      type: 'course',
      title: 'Advanced React Development',
      instructor: 'Sarah Chen',
      rating: 4.9,
      students: 1250,
      price: '$89',
      duration: '8 weeks',
      category: 'Technology',
      description: 'Master modern React patterns and best practices'
    },
    {
      id: 2,
      type: 'course',
      title: 'Digital Photography Fundamentals',
      instructor: 'Mike Rodriguez',
      rating: 4.8,
      students: 890,
      price: '$65',
      duration: '6 weeks',
      category: 'Creative Arts',
      description: 'Learn the basics of professional photography'
    },
    {
      id: 3,
      type: 'instructor',
      title: 'Data Science with Python',
      instructor: 'David Kim',
      rating: 4.9,
      students: 2100,
      price: '$120',
      duration: '12 weeks',
      category: 'Technology',
      description: 'Complete data science course from beginner to advanced'
    },
    {
      id: 4,
      type: 'course',
      title: 'Yoga for Beginners',
      instructor: 'Lisa Wang',
      rating: 4.7,
      students: 650,
      price: '$45',
      duration: '4 weeks',
      category: 'Health & Wellness',
      description: 'Start your yoga journey with expert guidance'
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const filteredResults = mockResults.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filteredResults)
      setIsSearching(false)
    }, 300)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    handleSearch(value)
  }

  const clearSearch = () => {
    setQuery('')
    setSearchResults([])
    setIsOpen(false)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setIsOpen(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e)
    }
  }

  return (
    <div ref={searchRef} className="relative">
      {/* Search Input */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative transition-all duration-300 ${
          isOpen ? 'w-96' : 'w-64'
        }`}
      >
        <form onSubmit={handleSearchSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, instructors..."
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsOpen(true)}
            className="w-full pl-10 pr-10 py-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </form>
      </motion.div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
          >
            {isSearching ? (
              <div className="p-6 text-center">
                <div className="animate-spin w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                <p className="text-gray-500">Searching...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="p-2">
                {searchResults.map((result) => (
                  <motion.div
                    key={result.id}
                    whileHover={{ backgroundColor: '#f8fafc' }}
                    onClick={() => {
                      router.push(`/search?q=${encodeURIComponent(result.title)}`)
                      setIsOpen(false)
                    }}
                    className="p-4 rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Search className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 truncate">
                          {result.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          by {result.instructor}
                        </p>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {result.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{result.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>{result.students.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{result.duration}</span>
                          </div>
                          <span className="font-semibold text-primary-500">
                            {result.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : query ? (
              <div className="p-6 text-center">
                <Search className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                <p className="text-gray-500">No results found for "{query}"</p>
                <p className="text-sm text-gray-400 mt-1">
                  Try different keywords or browse categories
                </p>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Popular Searches</h3>
                <div className="space-y-2">
                  {['React Development', 'Photography', 'Data Science', 'Yoga', 'Business'].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        router.push(`/search?q=${encodeURIComponent(term)}`)
                        setIsOpen(false)
                      }}
                      className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SearchBar
