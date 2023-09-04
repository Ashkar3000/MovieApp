import HeroBanner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
// import SearchResults from '../../components/Results/Results'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      {/* <SearchResults /> */}
    </div>
  )
}
