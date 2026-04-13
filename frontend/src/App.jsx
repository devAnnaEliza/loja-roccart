import { supabase } from './services/supabase'

function App() {

  console.log('SUPABASE URL:', import.meta.env.VITE_SUPABASE_URL)
  console.log('CLIENT:', supabase)

  return (
    <div>
      <h1>StoreKit Core</h1>
    </div>
  )
}

export default App