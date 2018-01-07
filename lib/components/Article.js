import React from 'react';


const Article = (props) => {
    const {article, author} = props
    return (
        <div>
           <div>{article.title}</div>
           <div>{article.date}</div>
           <div>{author.name}</div>
        </div>
    );
}

export default Article;

