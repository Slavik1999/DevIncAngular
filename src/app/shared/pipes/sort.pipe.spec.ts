import {SortPipe} from './sort.pipe';
import {sortNew, sortOld} from '../constants/time-constants';
import {Question} from '../interfaces/interfaces';

describe('SortPipe', () => {
  const sort = new SortPipe();
  const nonSortedArr = [
    {
      date: 4,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 1,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 3,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 2,
      text: '',
      title: '',
      tags: []
    },
  ];
  const sortedNewArr = [
    {
      date: 4,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 3,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 2,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 1,
      text: '',
      title: '',
      tags: []
    }
  ];
  const sortedOldArr = [
    {
      date: 1,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 2,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 3,
      text: '',
      title: '',
      tags: []
    },
    {
      date: 4,
      text: '',
      title: '',
      tags: []
    }
  ];

  it('should transform nonSortedArr to sortedNewArr with sortNew', () => {
    expect(sort.transform(nonSortedArr as Question[], sortNew)).toEqual(sortedNewArr);
  });
  it('should transform nonSortedArr to sortedOldArr with sortOld', () => {
    expect(sort.transform(nonSortedArr as Question[], sortOld)).toEqual(sortedOldArr);
  });
  it('shouldn\'t transform sortedOldArr with sortOld', () => {
    expect(sort.transform(sortedOldArr as Question[], sortOld)).toEqual(sortedOldArr);
  });
  it('shouldn\'t transform sortedNewArr with sortNew', () => {
    expect(sort.transform(sortedNewArr as Question[], sortNew)).toEqual(sortedNewArr);
  });
});
