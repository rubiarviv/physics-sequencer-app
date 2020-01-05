App:

Description: This App will play with physics sequencer controller using synth. 
*Note: In order to view the synth you need to scroll down, because view right now cannot be side by side. 

ID :physics-sequencer-app

Controller:

ID: physics_sequencer_controller

input messages: 
channels - none.

output messages: 
1.note-on - sent when a note is played:
 channel name: 'midi'
message parameters: 'note-on' , note [0...127], velocity

2.note-off - sent when a note is released
 channel name: 'midi'
message parameters: 'note-off', time, note [0...127], velocity 


Analyzer:

ID: synth-envelope

input messages:
1. note-on - received when a note is played
channel name  'midi' 
message parameters:  'note-on', pitch int[0...127], velocity int[0...127]

1. note-off - received when a note is played
channel name  'midi' 
message parameters:  'note-off', pitch int[0...127], velocity int[0...127]

