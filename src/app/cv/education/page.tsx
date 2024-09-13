'use client'

import React, { useState, useEffect } from 'react';

// Define the type of the data
interface Education {
    institution: string;
    duration: string;
    qualification?: string;
    field?: string;
    courses?: {
      name: string;
      credits?: number | string;
      grade?: string;
      code?: string;
    }[];
    qualifications?: {
      subject: string;
      level: string;
      grade: string;
    }[];
    details?: string;
    awards?: string[];
  }

// Define the type for the data that is being fetched
interface Data {
    education: Education[];
  }

function MyEducation() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    // If data is in public folder
    fetch('/cv.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <>
        <div>
        <h2>Education</h2>
        {data && data.education.map((edu, index) => (
        <div className="cvBox" key={index} style={{ marginBottom: '20px' }}>
            <h3 className="text-lg font-bold">{edu.institution}</h3>
            <p><div className="font-bold">Duration:</div> {edu.duration}</p>
            
            {edu.qualification && (
            <p><div className="font-bold">Qualification:</div> {edu.qualification}</p>
            )}
            
            {edu.field && (
            <p><div className="font-bold">Field:</div> {edu.field}</p>
            )}

            {/* Display courses if they exist */}
            {edu.courses && (
            <div>
                <h4 className="font-bold">Courses:</h4>
                <ul>
                {edu.courses.map((course, idx) => (
                    <li key={idx}>
                    {course.name} - {course.credits || course.grade} {course.code && `(${course.code})`}
                    </li>
                ))}
                </ul>
            </div>
            )}

            {/* Display qualifications if present */}
            {edu.qualifications && (
            <div>
                <h4 className="font-bold">Qualifications:</h4>
                <ul>
                {edu.qualifications.map((qual, idx) => (
                    <li key={idx}>
                    {qual.subject} ({qual.level}) - {qual.grade}
                    </li>
                ))}
                </ul>
            </div>
            )}

            {/* Display any additional details */}
            {edu.details && (
            <p><div className="font-bold">Details:</div> {edu.details}</p>
            )}
            
            {/* Display any awards if available */}
            {edu.awards && (
            <div>
                <h4 className="font-bold">Awards:</h4>
                <ul>
                {edu.awards.map((award, idx) => (
                    <li key={idx}>{award}</li>
                ))}
                </ul>
            </div>
            )}
        </div>
        ))}
        </div>
    </>
  );
}

export default MyEducation;