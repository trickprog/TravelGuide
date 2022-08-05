import React from 'react';

const Pagination = ({ PostPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / PostPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='flex justify-end mr-5'>

            <nav aria-label="Page navigation example">
                <ul className="inline-flex ">
                    {pageNumbers.map(number =>
                    (<li key={number}>
                        <a onClick={() => paginate(number)}class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {number}</a>
                    </li>
                     ))}
                </ul>
            </nav>

        </div>
    );
}

export default Pagination;
