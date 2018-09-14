import React, { Component } from 'react';
import logo from './equinor-logo.png';
import './App.css';
import styled from 'styled-components';
import TimeSlot from './TimeSlot';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HeaderTitle = styled.h1`
  font-size: 3em;
  color: #ec384a;
`;

const DaySchedule = styled.div`
  display: flex;
  flex-direction: column;
  section:nth-child(even) {
    background: rgb(239, 239, 239);
  }
  section:nth-child(odd) {
    background: rgb(195, 230, 243);
  }
`;

const DayHeader = styled.h2`
  padding: 30px 0px;
  margin: 0px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LogoWrapper>
            <img src={logo} className="App-logo" alt="logo" />
          </LogoWrapper>
          <HeaderTitle>Equinor Developer Conference 2018</HeaderTitle>
        </header>
        <body>
          <DaySchedule>
            <DayHeader>Day 1 — Tuesday September 25</DayHeader>
            <TimeSlot
              time="09:00"
              heading="Keynote"
              lectures={[
                {
                  name:
                    'Five things every developer should know about software architecture',
                  lecturer: 'Simon Brown',
                },
              ]}
            />
            <TimeSlot
              time="10:15"
              heading="Languages"
              lectures={[
                { name: 'Brainfuck', lecturer: 'Markus Fanebust Dregi' },
                { name: 'Lisp', lecturer: 'Markus Fanebust Dregi' },
                { name: 'Elixir', lecturer: 'Jørn Ølmheim' },
                { name: 'Haskell', lecturer: 'Jørgen Kvalsvik' },
                {
                  name: 'Visualising software architecture',
                  lecturer: 'Simon Brown',
                },
              ]}
            />
            <TimeSlot time="12:15" leisure="Developer Survey QA" />
            <TimeSlot time="13:00" leisure="Lunch" />
            <TimeSlot
              time="14:15"
              heading="Contributed lecture"
              lectures={[
                {
                  name: 'Data engineering in Omnia',
                  lecturer: 'Tahir Ali',
                },
              ]}
            />
            <TimeSlot
              time="15:00"
              heading="Miniworkshops"
              lectures={[
                {
                  name: 'Machine learning basics',
                  lecturer: 'Kristian Flikka and Eivind Sjaastad',
                },
                {
                  name: '3D printing',
                  lecturer: 'Carsten Falk Hammershøj',
                },
                {
                  name: 'Omnia API workshop',
                  lecturer: 'Øyvind Rønne',
                },
                {
                  name: 'Design thinking',
                  lecturer: 'Jon Jaatun',
                },
                {
                  name: 'The model-code gap Visualising software architecture',
                  lecturer: 'Simon Brown',
                },
              ]}
            />
            <TimeSlot time="17:30" leisure="Leisure and activities" />
            <TimeSlot
              time="19:00"
              leisure="Dinner and quiz, delicious tapas and drinks"
            />
            <TimeSlot time="21:00" leisure="Meet your colleagues" />
          </DaySchedule>
          <DaySchedule>
            <DayHeader>Day 2 — Wednesday September 26</DayHeader>
            <TimeSlot
              time="09:00"
              heading="Keynote"
              lectures={[
                {
                  name: 'Feedback driven development',
                  lecturer: 'Olve Maudal',
                },
              ]}
            />
            <TimeSlot
              time="10:15"
              heading="Workshops"
              lectures={[
                {
                  name: 'μPython',
                  lecturer: 'Sebastian Roll',
                },
                {
                  name: 'Unreal Engine',
                  lecturer: 'Jens Gåsemyr Magnus',
                },
                {
                  name: 'A Tour of Modern C++',
                  lecturer: 'Olve Maudal',
                },
                {
                  name: 'Intermediate Python',
                  lecturer: 'Sixty North v/ Robert Smallshire',
                },
                {
                  name: 'Radix',
                  lecturer: 'Lars Kåre Skjørestad',
                },
                {
                  name: 'Google Design Sprint',
                  lecturer: 'Kantega v/ Kristin Wulff',
                },
              ]}
            />
            <TimeSlot time="13:00" leisure="Lunch" />
            <TimeSlot
              time="14:15"
              heading="Workshops continued"
              lectures={[
                {
                  name: 'μPython',
                  lecturer: 'Sebastian Roll',
                },
                {
                  name: 'Unreal Engine',
                  lecturer: 'Jens Gåsemyr Magnus',
                },
                {
                  name: 'A Tour of Modern C++',
                  lecturer: 'Olve Maudal',
                },
                {
                  name: 'Intermediate Python',
                  lecturer: 'Sixty North v/ Robert Smallshire',
                },
                {
                  name: 'Agile',
                  lecturer: 'Knut Kvarme',
                },
                {
                  name: 'Google Design Sprint',
                  lecturer: 'Kantega v/ Kristin Wulff',
                },
              ]}
            />
            <TimeSlot time="17:30" leisure="Leisure and activities" />
            <TimeSlot time="19:00" leisure="Dinner" />
            <TimeSlot time="21:00" leisure="Meet your colleagues" />
          </DaySchedule>
          <DaySchedule>
            <DayHeader>Day 3 — Thursday September 27</DayHeader>
            <TimeSlot
              time="09:00"
              heading="Workshops"
              lectures={[
                {
                  name: 'μPython',
                  lecturer: 'Sebastian Roll',
                },
                {
                  name: 'Unreal Engine',
                  lecturer: 'Jens Gåsemyr Magnus',
                },
                {
                  name: 'Hackathon',
                },
                {
                  name: 'Intermediate Python',
                  lecturer: 'Sixty North v/ Robert Smallshire',
                },
                {
                  name: 'Agile',
                  lecturer: 'Knut Kvarme',
                },
                {
                  name: 'Google Design Sprint',
                  lecturer: 'Kantega v/ Kristin Wulff',
                },
              ]}
            />
            <TimeSlot
              time="12:15"
              lectures={[
                {
                  name: 'DCOE and CIT QA',
                  lecturer: 'Moderated by Kristian Flikka',
                },
              ]}
            />
            <TimeSlot time="13:00" leisure="Lunch" />
            <TimeSlot time="14:15" leisure="Summary" />
            <TimeSlot time="15:00" leisure="EOC" />
          </DaySchedule>
        </body>
      </div>
    );
  }
}

export default App;
