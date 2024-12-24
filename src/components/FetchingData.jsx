import React, { useState } from 'react';
import useFetch from "../hooks/useFetch";

const FetchingData = () => {
    const {data, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;

    const totalPages = data ? Math.ceil(data.length / postsPerPage) : 0;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data ? data.slice(indexOfFirstPost, indexOfLastPost) : [];

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageNumbersToShow = 5;
        const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

        if (totalPages <= maxPageNumbersToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= halfMaxPageNumbersToShow) {
                for (let i = 1; i <= maxPageNumbersToShow; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...', totalPages);
            } else if (currentPage > totalPages - halfMaxPageNumbersToShow) {
                pageNumbers.push(1, '...');
                for (let i = totalPages - maxPageNumbersToShow + 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1, '...');
                for (let i = currentPage - halfMaxPageNumbersToShow; i <= currentPage + halfMaxPageNumbersToShow; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...', totalPages);
            }
        }

        return pageNumbers.map((number, index) => (
            <button
                key={index}
                onClick={() => typeof number === 'number' && handlePageChange(number)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                disabled={typeof number !== 'number'}
            >
                {number}
            </button>
        ));
    }


    return (
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl p-4 my-6">
            <h1 className="text-3xl font-semibold text-gray-900">
                Fetching Data
            </h1>

            {error && <p className="text-red-500 bg-gray-100 font-bold p-4 my-2 rounded-lg">{error}</p>}

            {isPending && <p>Loading...</p>}

            {currentPosts && (
                <div>
                    {currentPosts.map((post) => (
                        <div key={post.id} className="bg-gradient-to-r from-yellow-200 to-red-400 rounded-xl p-4 my-6">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-4 overflow-scroll">
                {renderPageNumbers()}
            </div>
        </div>
    );
};

export default FetchingData;