/**
 * @classification UNCLASSIFIED
 *
 * @module views.about
 *
 * @copyright Copyright (C) 2018, Lockheed Martin Corporation
 *
 * @license Apache-2.0
 *
 * @owner James Eckstein
 *
 * @author Josh Kaplan
 *
 * @description The about page that describes what MBEE is and its members.
 */

/* Modified ESLint rules for React. */
/* eslint-disable no-unused-vars */
/* eslint-disable jsdoc/require-jsdoc */

// React modules
import React, { useState, useEffect } from 'react';


export default function About(props) {
  const [version, setVersion] = useState(null);
  const [build, setBuild] = useState(null);

  // Run only once, the first time this component loads
  useEffect(() => {
    window.fetch('/api/version')
    .then((response) => response.json())
    .then((data) => {
      setVersion(data.version);
      setBuild(data.build);
    });
  }, []);

  return (
    <div className="container about-top">
      <h2>About MBEE</h2>

      <p>The Model-Based Engineering Environment or MBEE is modeling collaboration tool
        that integrates system models with multidisciplinary engineering data to enable
        the system model to be a single-source of truth project data. It makes model
        data more accessible via a web-based user interface (UI) for ease of use across
        disciplines and skill sets within an organization. MBEE provides a web-based UI
        for team members to interact with system model data without needing to be a
        systems modeler themselves.</p>

      <p>The goal of MBEE is to better communicate data across engineering organizations
        by implementing the core goals of model-based systems engineering through
        software tools. MBEE decreases ambiguity by making a single-source of truth for
        data more achievable through its RESTful API, extensible plugins, and
        distributed services.</p>

      <h2>Technical Information</h2>
      <table className="table table-borderless">
        <tbody>
        <tr>
          <th scope="row">Version:</th>
          <td>{version}</td>
        </tr>
        <tr>
          <th scope="row">Build:</th>
          <td>{build}</td>
        </tr>
        </tbody>
      </table>


      <h2>Development Team</h2>
      <table className="table table-borderless">
        <tbody>
        <tr>
          <td>
            <p>Danny Chiu</p>
          </td>
          <td>Software Engineer (Front-End)</td>
        </tr>
        <tr>
          <td>
            <p>Connor Doyle</p>
          </td>
          <td>Software Engineer (Back-End)</td>
        </tr>
        <tr>
          <td>
            <p>Jimmy Eckstein</p>
          </td>
          <td>Software Lead</td>
        </tr>
        <tr>
          <td>
            <p>Phill Lee</p>
          </td>
          <td>
            Software Engineer (Back-End)
          </td>
        </tr>
        <tr>
          <td>
            <p>Donte McDaniel</p>
          </td>
          <td>
            Software Engineer (Full Stack)
          </td>
        </tr>
        </tbody>
      </table>

      <h2>Former Team Members</h2>
      <table className="table table-borderless">
        <tbody>
        <tr>
          <td>
            <p>Austin Bieber</p>
          </td>
          <td>Software Architect / Engineer (Back-End)</td>
        </tr>
        <tr>
          <td>
            <p>Leah De Laurell</p>
          </td>
          <td>Software Engineer (Front-End)</td>
        </tr>
        <tr>
          <td>
            <p>Josh Kaplan</p>
          </td>
          <td>Software Architect / Engineer</td>
        </tr>
        <tr>
          <td>
            <p>Jake Ursetta</p>
          </td>
          <td>Software Engineer</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
