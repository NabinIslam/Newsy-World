import React, { useEffect, useState } from "react";

const NewsItems = () => {
  const [newses, setNewses] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=0b9a05aabb5542018d71cd65a3ff44c0&page=1";

    const fetchNews = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setNewses(data.articles);
    };
    fetchNews();
  }, []);

  const handlePrevBtn = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0b9a05aabb5542018d71cd65a3ff44c0&page=${page}`;

    const fetchNews = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setNewses(data.articles);
    };
    fetchNews();
    setPage(page - 1);
  };

  const handleNextBtn = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0b9a05aabb5542018d71cd65a3ff44c0&page=${page}`;

    const fetchNews = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setNewses(data.articles);
    };
    fetchNews();
    setPage(page + 1);
  };

  return (
    <div>
      <section className="grid items-start justify-between sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 ">
        {newses &&
          newses.map((news) => {
            const { id, title, description, urlToImage, url } = news;
            return (
              <div
                className="max-w-sm-auto mx-2 bg-white rounded-lg border border-gray-200 shadow-md"
                key={id}
              >
                <a href={url}>
                  <img className="rounded-t-lg" src={urlToImage} alt="" />
                </a>
                <div className="p-4">
                  <a href={url}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                      {title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">
                    {description}
                  </p>
                  <a
                    href={url}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Read more
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
      </section>

      <section className="d-flex justify-content-between align-items-center">
        <div className="py-4">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            onClick={handlePrevBtn}
            disabled={page <= 1}
          >
            &laquo; Previous
          </button>
        </div>
        <div>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={handleNextBtn}
          >
            Next &raquo;
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewsItems;
