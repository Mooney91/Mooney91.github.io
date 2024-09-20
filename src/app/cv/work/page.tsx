'use client';

import React, { useState, useEffect } from 'react';

// Define the type of the work data
interface Work {
  duration: string;
  title: string;
  employer: string;
  description?: string;
}

// Define the type for the data that is being fetched
interface Data {
  work: Work[];
}

function MyWorkExperience() {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If data is in public folder
    fetch('/cv.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setError('Failed to load work experience data. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h2>Work Experience</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          data &&
          data.work.map((job, index) => (
            <div className="cvBox" key={index} style={{ marginBottom: '20px' }}>
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p>
                <strong>Employer:</strong> {job.employer}
              </p>
              <p>
                <strong>Duration:</strong> {job.duration}
              </p>
              
              {/* Display job description if it exists */}
              {job.description && (
                <p>
                  <strong>Description:</strong> {job.description}
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default MyWorkExperience;
