import Header from './components/header/Header'
import RecipeItem from './components/recipe-item/RecipeItem'

function App() {
    return (
        <div className="App">
            <Header />
            <RecipeItem
                recipe={{
                    id: 1,
                    name: 'Lasagna',
                }}
            />
            <RecipeItem
                recipe={{
                    id: 2,
                    name: 'Steak',
                }}
            />
            <RecipeItem
                recipe={{
                    id: 3,
                    name: 'Guakamole',
                }}
            />
        </div>
    )
}

export default App
