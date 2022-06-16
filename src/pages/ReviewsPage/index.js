import { connect } from 'react-redux';

import ReviewsPage from './ReviewsPage';

import { reviewsOperations, reviewsSelectors } from 'redux/reviews';

const mapStateToProps = (state) => ({
  reviews: reviewsSelectors.getReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews: () => dispatch(reviewsOperations.fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsPage);
