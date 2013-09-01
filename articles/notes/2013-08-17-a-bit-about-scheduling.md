# A bit about scheduling

_Some notes about scheduling theory after reading few resources online and the first twenty pages of the book "Scheduling: Theory, Algorithms, and System" by Michael L. Pinedo._

## The role of scheduling: Manage and optimize the resources usage to _better_ execute tasks

> Scheduling is a decision-making process that is used on a regular basis in many manufacturing and services industries. It deals with the allocation of resources to tasks over given time periods and its goal is to optimize one or more objectives.
> -- [Michael L. Pinedo][1]


## Two types of scheduling model: Deterministic and Stochastic

There are two types of scheduling model: __Deterministic scheduling model__ and __stochastic scheduling model__.

Both of these models assumed that there are a __finite number of jobs__ and __finite number of resources__. However these models are fundamentally different because they deal with jobs of different kind.

Deterministic scheduling models apply when __the processing time__, __the release date__ and __the due date__ are known before executing the job. Deterministic scheduling models allow to minimize (optimize) one or more objectives.

Whereas Stochastic scheduling models apply when __the processing time__, __the release date__ and __the due date__ may not be known in advance; only their distributions are know in advance. The actual processing time, release date and due date are known at the completion of the processing. These models allow to minimize (optimize) a single objective usually in expectation.

## Components of scheduling

- Jobs
	- __processing time__: the time necessary to complete the job
	- release date
	- due date
	- __weight__: It is a priority factor, _denoting the importance, the value_ of the job relative to other jobs in the system. The weight may represent the actual cost of keeping the job in the system. It could be a holding or inventory cost.

- Resources (i.e: machines, humans)

- Machine environment (i.e: resource environment)

- Processing characterics & Constraints

- Objectives

## Description of a scheduling problem

A scheduling problem is described by a triplet α (alpha) | β (beta) | 𝜸 (gamma).

The α field describes the machine environment and contains only one entry.
The β field provides details of processing characteristics and constraints.It mays contain zero or more entries.
The 𝜸 field describes the objectives to be minimized (i.e: optimized). It mays contain often one entry.

- α - machine environment:

	- single machine
	- identical machine in parallel
	- machine in parallel with different speeds
	- unrelated machine in parallel
	- flow shop
	- flexible flow shop
	- job shop
	- flexible job shop
	- open shop

- β - processing characteristics and constraints:

	- __release date__
	- ~~__due date__~~: The type of objective function gives sufficient indication whether or not there are due dates.
	- __preemptions__: Imply that it is not necessary to keep a job on a machine, once started.
	- __precedence constraints__: Require that one or more jobs have to be completed before another job is allowed to start its processing, in short __dependencies between jobs__.
	- __batch processing__: A machine may be able to process a number of jobs, says _b_ simultaneously; that is, it can process a batch of up to _b_ jobs at the same time. The processing time a batch is the processing time of the job with the longest processing time. The batch is completed when the last is completed.
	- __breakdowns__: Imply that a machine may not be continuously available. (it is a machine availability constraint)
	- __machine eligibility restrictions__: Imply that a machine may not be able to process some jobs. (it is a machine constraint)
	- __permutation__: A constraint that may appear in _the flow shop environment_. It implies that the FIFO discipline is applied (First In First Out).
	- __blocking__: A constraint that may appear in _the flow shop environment_. It implies that the completed job has to remain on the upstream machine preventing (i.e., blocking) that machine from working on the next job.
	- __no wait__: It is requirement. A requirement that may occur in _flow shops_.
	- __recirculation__: Imply that a machine may visit a machine or work center more than once.

- 𝜸 - objectives to minimize - some examples

	- __Makespan__: Is the completion time of the last job to leave the system. A minimum makespan usually implies a good utilization of the machine.
	- __Maximum Lateness__: It measures the worst violation of the due dates.
	- __Total weighted completion time__: It gives an indication of the total holding or inventory costs incurred by the schedule.
	- __Discounted total weighted completion time__:
	- __Total weighted tardiness__:
	- __Weighted number of tardy jobs__:

> The objective to be minimized is always a function of the completion times of the job, which, of course, depend on the schedule. -- [Michael L. Pinedo][2]




## Bibliography

[1]: Scheduling: Theory, Algorithms and Systems, Fourth Edition - Chapter 1.1 - page 1

[2]: Scheduling: Theory, Algorithms and Systems, Fourth Edition - Chapter 2.1 - page 18