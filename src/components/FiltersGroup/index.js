import {BiSearch} from 'react-icons/bi'

import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    updateSearchInput,
    onEnterSearchInput,
    activeCategoryId,
    changeCategory,
    changeRating,
    clearFilters,
  } = props

  const renderRatingsFiltersList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClaName = rating.ratingId ? 'and-up rating-active' : 'and-up'

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClaName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClsName = isActive
        ? 'category-name ctg-active'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClsName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list">{renderCategoriesList()}</ul>
    </>
  )

  const onchangeSearchInput = event => {
    updateSearchInput(event.target.value)
  }

  const onEnterBtn = event => {
    if (event.key === 'Enter') {
      onEnterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={onchangeSearchInput}
          onKeyDown={onEnterBtn}
        />
        <BiSearch className="search-icon" />
      </div>

      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
