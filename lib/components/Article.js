import React from 'react';

const styles ={
    article: {
        paddingBottom: 5,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold'
    },
    date: {
        fontSize: '0.8em',
        color: '#888'
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    body: {
        paddingLeft: 20,
    }
};

//function needs to be global scope , othrerwise it will be still regenerated!
const dateDisplay = (dateStr) =>  new Date(dateStr).toDateString();


const Article = (props) => {
    const {article, actions} = props;
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div style={styles.article}>
           <div style={styles.title}>{article.title}</div>
           <div style={styles.date}>
                {dateDisplay(article.date)}
            </div>
           <div style={styles.author}>
            <a href="{author.website}"> 
                {author.firstName} {author.lastName}
            </a>
           </div>
           <div style={styles.body}>{article.body}</div>
        </div>
    );
}

export default Article;

