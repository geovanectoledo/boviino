export default function TestPage() {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-[#1D3108]">Página de Teste</h1>
        <p className="mt-4 text-gray-700">
          Essa é uma página de teste dentro do Dashboard. Use essa página para verificar se a Navbar e o Submenu
          estão funcionando corretamente.
        </p>
  
        <div className="mt-8 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Testando Navbar e Submenu</h2>
          <p className="mt-2 text-gray-600">
            Role a página para verificar se o submenu fixa corretamente quando a navbar some.
          </p>
        </div>
  
        {/* Simulando conteúdo longo para testar o scroll */}
        <div className="mt-12 space-y-6">
          {Array.from({ length: 20 }).map((_, index) => (
            <p key={index} className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>
    );
  }