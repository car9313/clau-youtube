import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
const Siderbar = ({ selectedCategory, setSelectedCategory }) => {
    const handleChange = (categoryName) => {
        setSelectedCategory(categoryName)
    }
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map(category => (
                <button
                    key={category.name}
                    className='category-btn'
                    style={{
                        background: category.name === selectedCategory
                            && '#FC1503',
                    }}
                    onClick={() => {
                        handleChange(category.name)
                    }}
                >
                    <span className='category-span-icon' style={{
                        color: category.name === selectedCategory
                            && 'white',
                        marginRight: '15px'
                    }}> {category.icon}</span>
                    <span className='category-span-name' style={{
                        opacity: category.name === selectedCategory
                            && '1'
                    }}> {category.name}</span>
                </button>
            ))}
        </Stack>
    )
}
export default Siderbar