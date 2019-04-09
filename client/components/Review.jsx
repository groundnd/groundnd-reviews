import React from 'react';
import DOMPurify from 'dompurify';
import moment from 'moment';
import styles from './Review.module.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  replaceWithBold(paragraph) {
    const { searchTerm } = this.props;
    return paragraph.replace(searchTerm, `<b>${searchTerm}</b>`);
  }

  render() {
    const { review } = this.props;
    const { expanded } = this.state;
    let reviewText;
    if (expanded === true) {
      reviewText = review.review_text.split('\n').map( (paragraph, index) => {
        return <p className="reviewParagraph" key={index.toString()} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.replaceWithBold(paragraph)) }} />;
      });
    } else if (expanded === false) {
      const reviewWordsArr = review.review_text.split(' ');
      const first50WordsArr = reviewWordsArr.slice(0, 35);
      const first50WordsStr = first50WordsArr.join(' ');
      
      if (reviewWordsArr.length <= 35 && !first50WordsStr.includes('\n')) {
        reviewText = <p className="reviewParagraph" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.replaceWithBold(first50WordsStr)) }} />;
      } else if (reviewWordsArr.length <= 35) {
        reviewText = first50WordsStr.split('\n').map((paragraph, index) => <p key={index.toString()} className="reviewParagraph" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.replaceWithBold(paragraph)) }} />);
      } else {
        const paragraphs = first50WordsStr.concat('...').split('\n').map((paragraph, index) => {
          return (
            <p key={index.toString()} className="reviewParagraph" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.replaceWithBold(paragraph)) }} />
          );
        });
        reviewText = (
          <span>
            {paragraphs}
            <a onClick={() => { this.setState({expanded: true}) }}>Read more</a>
          </span>
        );
      }
    }

    return (
      <div>
        <div className="review">
          <div className="userInfo">
            <img src={review.user_photo} alt={review.user_name} />
            <div>
              <b className="name">{review.user_name}</b>
              <div className="date">{moment(review.review_date).format('MMMM YYYY')}</div>
            </div>
          </div>
          {reviewText}
        </div>
        <hr />
      </div>
    );
  }
}

export default Review;
