import React, {useContext, useState} from 'react'

import './styles.css'
import trainData from "./train-options.json"
import ResourcesContext from '../../../context/ResourcesContext'
import StatsContext from '../../../context/StatsContext'

const Train = ({setResources, setStats}) => {
  const {stamina, mana} = useContext(ResourcesContext)
  const {strength, magic} = useContext(StatsContext)

  // outcome state
  const [outcome, setOutcome] = useState()

  // make weighted choice from outcome options
  const weightedChoice = (outcomes) => {
    var i;

    var weights = [];

    for (i = 0; i < outcomes.length; i++) {
      weights[i] = outcomes[i].weight + (weights[i - 1] || 0);
    }
      
    var random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
      if (weights[i] > random)
          break;
    
    return outcomes[i];
  } 

  const onClick = (event) => {
    const workoutOutcomes = trainData.workout.outcomes
    const studyOutcomes = trainData.study.outcomes
    const adventureOutcomes = trainData.adventure.outcomes
    // const questionOutcomes = trainData.question.outcomes

    if (event.target.name === 'workout') {
      if (stamina >= 10) {
        //  select outcome from train data and set outcome state
        var selectedOutcome = weightedChoice(workoutOutcomes)
        setOutcome(selectedOutcome)
        console.log(selectedOutcome)

        // update resources and stats
        setResources(prevResources => ({
          ...prevResources, 
          stamina: stamina - 10
        }))

        setStats(prevStats => ({
          ...prevStats, 
          strength: strength + selectedOutcome.strength_change
        }))
      } else {
        console.log("stamina too low")
      }
    } else if (event.target.name === 'study') {
      if (mana >=10) {
        //  select outcome from train data and set outcome state
        var selectedOutcome = weightedChoice(studyOutcomes)
        setOutcome(selectedOutcome)
        console.log(selectedOutcome)

        // update resources and stats
        setResources(prevResources => ({
          ...prevResources, 
          mana: mana - 10
        }))

        setStats(prevStats => ({
          ...prevStats, 
          magic: magic + selectedOutcome.magic_change
        }))
      } else {
        console.log("mana too low")
      }
    } else if (event.target.name === 'adventure') {
      if (stamina >= 10) {

      } else {
        console.log("stamina too low")
      }
    } else if (event.target.name === '???') {

    }


  }
 
  return (
    <div className='train-container'>
      <div className='train-buttons-container'>
        <button 
          className='train-button'
          name='workout'
          onClick={onClick}
        >
          Workout
        </button>

        <button 
          className='train-button'
          name='study'
          onClick={onClick}
        >
          Study
        </button>

        <button 
          className='train-button'
          name='adventure'
          onClick={onClick}
        >
          Adventure
        </button>

        <button 
          className='train-button'
          name='???'
          onClick={onClick}
        >
          ???
        </button>
      </div>

      <div className className='train-outcome-container'>
        {outcome != null ? <p className='train-text'>{JSON.stringify(outcome.text)}</p> : null} 
      </div>
    </div>
  )
}

export default Train