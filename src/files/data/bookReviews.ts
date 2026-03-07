import type { ReviewPost } from "../../types/types";

export const bookReview: ReviewPost[] = [
    {
      id: 1,
      title: 'Bayes Rules! An Introduction to Applied Bayesian Modeling',
      authors: 'Alicia A. Johnson, Miles Q. Ott, Mine Dogucu',
      date: null,
      category: 'Statistics & Forecasting',
      excerpt: 'An engaging, sophisticated, and fun introduction to the field of Bayesian statistics.',
      tags: ['Statistics & Forecasting'],
      status: "Done",
      rating: 5,
      notes: 'A great look into quickly understanding Bayesian MCMC methods. After trying different books, this book was the most suitable as it was had a well-balanced theory, explanation, application while not being too verbose in its story-telling nor too focused on deep-diving into the mathematical intricacies. Beautiful visuals.',
      freeLink: "https://www.bayesrulesbook.com/"
    },
    {
      id:2,
      title: 'Forecasting: Principles and Practice',
      authors: 'Rob J Hyndman and George Athanasopoulos',
      date: null,
      category: 'Statistics & Forecasting',
      excerpt: "Comprehensive introduction to forecasting methods.",
      tags: ['Statistics & Forecasting'],
      status: "Not Done Reading",
      rating: 0,
      notes: "The content is clear and good. Have not finished reading still.",
      freeLink: "https://otexts.com/fpp3/"
    },
      {
      id:3,
      title: 'An Introduction to Statistical Learning',
      authors: 'Gareth James, Daniela Witten, Trevor Hastie, Rob Tibshirani, Jonathan Taylor',
      date: null,
      category: 'Statistics & Forecasting',
      excerpt: "A broad introduction to various statistical learning concept. Less technicalities than its companion The Elements of Statistical Learning.",
      tags: ['Statistics & Forecasting'],
      status: "Not Done Reading",
      rating: 0,
      notes: "Still reading it, around halfway through.",
      freeLink: "https://www.statlearning.com/"
    }
];