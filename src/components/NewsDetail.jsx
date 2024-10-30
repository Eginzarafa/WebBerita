import React from "react";

function NewsDetail({ article, onClose }) {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h2 className="text-3xl font-semibold">{article.title}</h2>
        <p className="text-gray-600">
          {article.source.name} - {new Date(article.publishedAt).toDateString()}
        </p>
      </div>
      <div className="mb-4">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="mb-2 max-w-full h-auto"
        />
        <p>{article.content}</p>
      </div>
      <button
        onClick={onClose}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
      >
        Kembali
      </button>
    </div>
  );
}

export default NewsDetail;
