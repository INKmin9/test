import { useSearchParams, Link } from 'react-router-dom'

const mockProducts: Record<string, { name: string; category: string; price: number; description: string }> = {
  '1': { name: '무선 이어폰', category: 'electronics', price: 89000, description: '고음질 무선 이어폰입니다. 노이즈 캔슬링 기능이 탑재되어 있습니다.' },
  '2': { name: '스마트 워치', category: 'electronics', price: 199000, description: '건강 모니터링과 알림 기능을 갖춘 스마트 워치입니다.' },
  '3': { name: '운동화', category: 'fashion', price: 129000, description: '편안한 착용감의 운동화입니다. 다양한 색상이 있습니다.' },
  '4': { name: '백팩', category: 'fashion', price: 79000, description: '넉넉한 수납공간의 백팩입니다. 노트북 수납 가능합니다.' },
  '5': { name: '텀블러', category: 'lifestyle', price: 35000, description: '보온보냉 기능의 스테인리스 텀블러입니다.' },
}

const colors = ['default', 'red', 'blue', 'green', 'black']

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id') || '1'
  const color = searchParams.get('color') || 'default'

  const product = mockProducts[id]

  const handleColorChange = (newColor: string) => {
    setSearchParams({ id, color: newColor })
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">상품을 찾을 수 없습니다</h1>
        <Link to="/search?q=&category=all" className="text-indigo-600 hover:underline">
          검색 페이지로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <span className="text-8xl">📦</span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-500">{product.category}</span>
              <h1 className="text-2xl font-bold">{product.name}</h1>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div>
              <p className="text-sm text-gray-500 mb-2">색상 선택</p>
              <div className="flex gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => handleColorChange(c)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      color === c
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-2xl font-bold text-indigo-600">
              {product.price.toLocaleString()}원
            </p>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                현재 URL 파라미터: <code className="bg-gray-100 px-2 py-1 rounded">id={id}&color={color}</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          to="/search?q=&category=all"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← 검색으로 돌아가기
        </Link>
        <Link
          to={`/product?id=${(parseInt(id) % 5) + 1}&color=default`}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          다음 상품 보기 →
        </Link>
      </div>
    </div>
  )
}
