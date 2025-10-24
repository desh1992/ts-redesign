'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Star, Users, Clock, ChevronDown, X } from 'lucide-react'
import { GlowingEffect } from './ui/glowing-effect'

interface SearchResult {
  id: number
  type: 'course' | 'instructor'
  title: string
  instructor: string
  rating: number
  students: number
  price: string
  duration: string
  category: string
  description: string
  image?: string
}

const SearchResults = ({ query }: { query: string }) => {
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    duration: '',
    rating: ''
  })
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('relevance')

  // Mock data - in a real app, this would come from an API
  const mockData: SearchResult[] = [
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
      description: 'Master modern React patterns and best practices with hands-on projects',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop'
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
      description: 'Learn the basics of professional photography from composition to editing',
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      type: 'course',
      title: 'Data Science with Python',
      instructor: 'David Kim',
      rating: 4.9,
      students: 2100,
      price: '$120',
      duration: '12 weeks',
      category: 'Technology',
      description: 'Complete data science course from beginner to advanced with real-world projects',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
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
      description: 'Start your yoga journey with expert guidance and personalized instruction',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      type: 'course',
      title: 'Business Strategy & Leadership',
      instructor: 'Alex Johnson',
      rating: 4.8,
      students: 980,
      price: '$95',
      duration: '10 weeks',
      category: 'Business',
      description: 'Develop leadership skills and strategic thinking for business success',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      type: 'instructor',
      title: 'Spanish Language Mastery',
      instructor: 'Maria Garcia',
      rating: 4.9,
      students: 1500,
      price: '$60',
      duration: '8 weeks',
      category: 'Languages',
      description: 'Learn Spanish from a native speaker with immersive conversation practice',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
    }
  ]

  useEffect(() => {
    if (query) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        const filteredResults = mockData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.instructor.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filteredResults)
        setIsLoading(false)
      }, 500)
    }
  }, [query])

  const categories = ['All', 'Technology', 'Creative Arts', 'Business', 'Health & Wellness', 'Languages']
  const priceRanges = ['All', 'Under $50', '$50-$100', '$100-$200', 'Over $200']
  const durations = ['All', '1-4 weeks', '5-8 weeks', '9-12 weeks', '12+ weeks']

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600">
            {isLoading ? 'Searching...' : `${results.length} results found`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {priceRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Duration
                  </label>
                  <select
                    value={filters.duration}
                    onChange={(e) => setFilters({...filters, duration: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {durations.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Minimum Rating
                  </label>
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters({...filters, rating: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">All Ratings</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.0">4.0+ Stars</option>
                    <option value="3.5">3.5+ Stars</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="relevance">Relevance</option>
                  <option value="rating">Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="students">Most Popular</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full"></div>
                <span className="ml-3 text-gray-600">Searching...</span>
              </div>
            )}

            {/* Results Grid */}
            {!isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <GlowingEffect
                      spread={35}
                      glow={true}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.1}
                      borderWidth={2}
                    />
                    <div className="aspect-video bg-gradient-to-r from-primary-500 to-purple-500 relative overflow-hidden">
                      {result.image ? (
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Search className="w-12 h-12 text-white opacity-50" />
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-primary-500">
                        {result.price}
                      </div>
                    </div>

                    <div className="relative z-10 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            by {result.instructor}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{result.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {result.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{result.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{result.duration}</span>
                        </div>
                        <span className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full text-xs">
                          {result.category}
                        </span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        {result.type === 'course' ? 'Enroll Now' : 'View Profile'}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {!isLoading && results.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters
                </p>
                <button
                  onClick={() => {
                    setFilters({ category: '', priceRange: '', duration: '', rating: '' })
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults
