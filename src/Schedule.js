import React, { Component } from 'react';
import styled from 'styled-components';
import TimeSlot from './TimeSlot';
import Header from './Header';

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
  color: rgb(26, 108, 118);
`;

class Schedule extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <Header location={this.props.location} />
        <div>
          <DaySchedule>
            <DayHeader>Day 1 — Tuesday September 25</DayHeader>
            <TimeSlot
              time="09:00"
              heading="Keynote"
              lectures={[
                {
                  id: '1',
                  title:
                    'Five things every developer should know about software architecture',
                  lecturer: 'Simon Brown',
                },
              ]}
            />
            <TimeSlot
              time="10:15"
              heading="Languages"
              lectures={[
                { title: 'Brainfuck', lecturer: 'Markus Fanebust Dregi' },
                { title: 'Lisp', lecturer: 'Markus Fanebust Dregi' },
                { title: 'Elixir', lecturer: 'Jørn Ølmheim' },
                { title: 'Haskell', lecturer: 'Jørgen Kvalsvik' },
                {
                  title: 'Visualising software architecture',
                  lecturer: 'Simon Brown',
                },
              ]}
            />
            <TimeSlot
              time="12:15"
              lectures={[{ title: 'Developer Survey QA' }]}
            />
            <TimeSlot time="13:00" leisure="Lunch" />
            <TimeSlot
              time="14:15"
              heading="Contributed lecture"
              lectures={[
                {
                  title: 'Data engineering in Omnia',
                  lecturer: 'Tahir Ali',
                },
              ]}
            />
            <TimeSlot
              time="15:00"
              heading="Miniworkshops"
              lectures={[
                {
                  title: 'Machine learning basics',
                  lecturer: 'Kristian Flikka and Eivind Sjaastad',
                },
                {
                  title: '3D printing',
                  lecturer: 'Carsten Falk Hammershøj',
                },
                {
                  title: 'Omnia API workshop',
                  lecturer: 'Øyvind Rønne',
                },
                {
                  title: 'Design thinking',
                  lecturer: 'Jon Jaatun',
                },
                {
                  title: 'The model-code gap Visualising software architecture',
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
                  title: 'Feedback driven development',
                  lecturer: 'Olve Maudal',
                },
              ]}
            />
            <TimeSlot
              time="10:15"
              heading="Workshops"
              lectures={[
                {
                  title: 'μPython',
                  lecturer: 'Sebastian Roll',
                },
                {
                  title: 'Unreal Engine',
                  lecturer: 'Jens Gåsemyr Magnus',
                },
                {
                  title: 'A Tour of Modern C++',
                  lecturer: 'Olve Maudal',
                },
                {
                  title: 'Intermediate Python',
                  lecturer: 'Sixty North v/ Robert Smallshire',
                },
                {
                  title: 'Radix',
                  lecturer: 'Lars Kåre Skjørestad',
                },
                {
                  title: 'Google Design Sprint',
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
                  title: 'μPython',
                  lecturer: 'Sebastian Roll',
                },
                {
                  title: 'Unreal Engine',
                  lecturer: 'Jens Gåsemyr Magnus',
                },
                {
                  title: 'A Tour of Modern C++',
                  lecturer: 'Olve Maudal',
                },
                {
                  title: 'Intermediate Python',
                  lecturer: 'Sixty North v/ Robert Smallshire',
                },
                {
                  title: 'Agile',
                  lecturer: 'Knut Kvarme',
                },
                {
                  title: 'Google Design Sprint',
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
                  title: 'μPython',
                  lecturer: 'Sebastian Roll',
                },
                {
                  title: 'Unreal Engine',
                  lecturer: 'Jens Gåsemyr Magnus',
                },
                {
                  title: 'Hackathon',
                },
                {
                  title: 'Intermediate Python',
                  lecturer: 'Sixty North v/ Robert Smallshire',
                },
                {
                  title: 'Agile',
                  lecturer: 'Knut Kvarme',
                },
                {
                  title: 'Google Design Sprint',
                  lecturer: 'Kantega v/ Kristin Wulff',
                },
              ]}
            />
            <TimeSlot
              time="12:15"
              lectures={[
                {
                  title: 'DCOE and CIT QA',
                  lecturer: 'Moderated by Kristian Flikka',
                },
              ]}
            />
            <TimeSlot time="13:00" leisure="Lunch" />
            <TimeSlot time="14:15" heading="Summary" />
            <TimeSlot time="15:00" leisure="EOC" />
          </DaySchedule>
        </div>
      </div>
    );
  }
}

export default Schedule;
