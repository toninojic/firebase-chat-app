import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input placeholder='Search for User' type="text" />
        </div>
        <div className="userChat">
            <img src="" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search