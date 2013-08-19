# A bit about scheduling

_Some notes about scheduling theory after reading few resources online and the first twenty pages of the book "Scheduling: Theory, Algorithms, and System" by Michael L. Pinedo._

## The role of scheduling: Manage and optimize the resources usage to _better_ execute tasks

> Scheduling is a decision-making process that is used on a regular basis in many manufacturing and services industries. It deals with the allocation of resources to tasks over given time periods and its goal is to optimize one or more objectives.


## Two types of scheduling model: Deterministic and Stochastic

There are two types of scheduling model: __Deterministic scheduling model__ and __stochastic scheduling model__.

Both of these models assumed that there are a __finite number of jobs__ and __finite number of resources__. However these models are fundamentally different because they deal with jobs of different kind.

Deterministic scheduling models apply when __the processing time__, __the release date__ and __the due date__ are known before executing the job. Deterministic scheduling models allow to minimize (optimize) one or more objectives.

Whereas Stochastic scheduling models apply when __the processing time__, __the release date__ and __the due date__ may not be known in advance; only their distributions are know in advance. The actual processing time, release date and due date are known at the completion of the processing. These models allow to minimize (optimize) a single objective usually in expectation.

## Components of scheduling: Jobs, Resources & Environments

- Jobs
	1. Caracteristics:
		- processing time
		- release date
		- due date
		- weight (priority)
	2. Constraints
		- dependencies
- Resources (i.e: machines, humans)

- Environments (i.e: machine configuration)
	- single machine
	- multiple machines in parallel
	- job shop
	- ...