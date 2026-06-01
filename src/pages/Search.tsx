import { useSearchParams, Link } from 'react-router-dom'

const mockProducts = [
  { id: 1, name: '무선 이어폰', category: 'electronics', price: 89000 },
  { id: 2, name: '스마트 워치', category: 'electronics', price: 199000 },
  { id: 3, name: '운동화', category: 'fashion', price: 129000 },
  { id: 4, name: '백팩', category: 'fashion', price: 79000 },
  { id: 5, name: '텀블러', category: 'lifestyle', price: 35000 },
]

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const category = searchParams.get('category') || 'all'

  const filteredProducts = mockProducts.filter((product) => {
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === 'all' || product.category === category
    return matchesQuery && matchesCategory
  })

  const handleCategoryChange = (newCategory: string) => {
    setSearchParams({ q: query, category: newCategory })
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">검색 결과</h1>
        <p className="text-gray-600">
          검색어: <span className="font-semibold text-indigo-600">{query || '(없음)'}</span>
        </p>
        <p className="text-gray-600">
          카테고리: <span className="font-semibold text-indigo-600">{category}</span>
        </p>
      </div>

      <div className="flex gap-2">
        {['all', 'electronics', 'fashion', 'lifestyle'].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              category === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat === 'all' ? '전체' : cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product?id=${product.id}&color=default`}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <span className="text-4xl">📦</span>
            </div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-indigo-600 font-bold mt-2">
              {product.price.toLocaleString()}원
            </p>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  )
}
