// Name: Rubi Arviv
// ID: 033906132 

import { initialize, Endpoint } from '@muzilator/sdk'

const init = async () => {
  const platform = await initialize()
  await platform.loadLibrary('physics_sequencer_controller', 'physics_sequencer', 'primary')
  await platform.loadLibrary('midi-synth', 'synth1')

  await platform.connectChannels(Endpoint('physics_sequencer', 'midi'), Endpoint('synth1', 'midi'))
}

init()
