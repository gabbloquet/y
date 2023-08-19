import React from 'react';
import { useContests } from '../../services/contest/contest.service';
import Loader from '../components/Loader';

export const Contests = () => {
  const { data: contests, isLoading } = useContests();

  return (
    <>
      {isLoading ? (
        <Loader data-testid="contests-loader" />
      ) : (
        <>
          {/*@ts-ignore*/}
          <h1>Contests</h1>
          <p>You can find here all next contest events :</p>
          <ul>
            {contests?.map((contest) => (
              <li data-testid={`contest-name-${contest.title}`} key={contest.title}>
                <p>
                  {contest.title} :{' '}
                  <a href={contest.url} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
