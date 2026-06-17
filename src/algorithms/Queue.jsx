// Components
import { Heading, Paragraph, Image, Bullet, TableOfContents, References, Title, SubHeading } from "../components";

// Visualizers
import QueueVisualizer from "../visualizer/algorithm/queue/QueueVisualizer.jsx";

// Assets
import { images, algorithmsReferences } from "../assets/data";

const Queue = () => {
    return (
        <div>

            <Paragraph content={"A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order."} />

            <Bullet
                items={[
                    "It follows the principle of `First in, First out` (FIFO), where the first element added to the queue is the first one to be removed.",
                    "It is used as a buffer in computer systems where we have speed mismatch between two devices that communicate with each other. For example, CPU and keyboard and two devices in a network",
                    "Queue is also used in Operating System algorithms like CPU Scheduling and Memory Management, and many standard algorithms like Breadth First Search of Graph, Level Order Traversal of a Tree."
                ]} />

            <Image imageURL={images.queue["image 0"]} caption="What is Queue - GeeksforGeeks"
                link="https://www.geeksforgeeks.org/dsa/queue-data-structure/" />

            <TableOfContents items={[
                { id: 'introduction', title: 'Introduction' },
                { id: 'basic-operations', title: 'Basic Operations' },
                { id: 'array-implementations', title: 'Array Implementations' },
                { id: 'basic-linked-list-implementation', title: 'Basic Linked List Implementation' },
                { id: 'applications', title: 'Applications' },
            ]} />

            <section id="introduction">
                <Title title="Introduction" />

                <Paragraph content={"Queue is a linear data structure that follows FIFO (First In First Out) Principle, so the first element inserted is the first to be popped out."} />

                <Bullet
                    items={[
                        "It is an ordered list in which insertions are done at one end which is known as the rear and deletions are done from the other end known as the front.",
                        "A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first.",
                        "The difference between stack and queue is in removing an element. In a stack we remove the item that is most recently added while in a queue, we remove the item that is least recently added."
                    ]} />

                <Heading heading={"FIFO Principle in Queue:"} />
                <Image imageURL={images.queue["image 1"]} caption="FIFO Principle in Queue - GeeksforGeeks"
                    link="https://www.geeksforgeeks.org/dsa/introduction-to-queue-data-structure-and-algorithm-tutorials/" />

                <Heading heading={"Basic Terminologies of Queue"} />

                <Bullet
                    items={["Front: Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue, is called the front of the queue. It is also referred as the head of the queue.",
                        "Rear: Position of the last entry in the queue, that is, the one most recently added, is called the rear of the queue. It is also referred as the tail of the queue.",
                        "Size: Size refers to the current number of elements in the queue.",
                        "Capacity: Capacity refers to the maximum number of elements the queue can hold."
                    ]} />
            </section>

            <section id="types-of-queue">
                <Title title="Types of Queues" />

                <Heading heading={"Queue data structure can be classified into 3 types:"} />
                <Image imageURL={images.queue["image 2"]} caption="Types of Queues - GeeksforGeeks"
                    link="https://www.geeksforgeeks.org/dsa/introduction-to-queue-data-structure-and-algorithm-tutorials/" />

                <SubHeading subHeading={"1. Simple Queue"} />

                <Paragraph content={"A simple queue follows the FIFO (First In, First Out) principle."} />

                <Bullet
                    items={[
                        "Insertion is allowed only at the rear (back).",
                        "Deletion is allowed only from the front.",
                        "Can be implemented using a linked list or a circular array."
                    ]} />

                <Paragraph content={"When an array is used, we often prefer a circular queue, which is mainly an efficient array implementation of a simple queue. It efficiently utilizes memory by reusing the empty spaces left after deletion, avoiding wastage that occurs in a normal linear array implementation."} />

                <SubHeading subHeading={"2. Double-Ended Queue (Deque)"} />
                <Paragraph content={"In a deque, insertion and deletion can be performed from both ends."} />

                <SubHeading subHeading={"3. Priority Queue"} />
                <Paragraph content={"A queue where each element is assigned a priority, and deletion always happens based on priority (not just position)."} />
            </section>

            <section id="basic-operations">

                <Title title="Basic Operations" />

                <Bullet
                    type="ol"
                    items={[
                        "Enqueue: Adds an element to the end (rear) of the queue. If the queue is full, an overflow error occurs.",
                        "Dequeue: Removes the element from the front of the queue. If the queue is empty, an underflow error occurs.",
                        "Peek/Front: Returns the element at the front without removing it.",
                        "Size: Returns the number of elements in the queue.",
                        "isEmpty: Returns true if the queue is empty, otherwise false.",
                        "isFull: Returns true if the queue is full, otherwise false."
                    ]} />
            </section>

            <section id="array-implementations">
                <Title title="Array Implementations" />
            </section>

            <section id="basic-linked-list-implementation">
                <Title title="Basic Linked List Implementation" />
            </section>

            <section id="applications">
                <Title title="Applications" />

                <Paragraph content={"A Queue is a linear data structure. This data structure follows a particular order in which the operations are performed. The order is First In First Out (FIFO)."} />

                <Bullet
                    items={[
                        "Network: In a network, a queue is used in devices such as a router or a switch. Another application of a queue is a mail queue which is a directory that stores data and controls files for mail messages.",
                        "Job Scheduling: The computer has a task to execute a particular number of jobs that are scheduled to be executed one after another. These jobs are assigned to the processor one by one which is organized using a queue.",
                        "Shared resources: Queues are used as waiting lists for a single shared resource."
                    ]} />

                <Image imageURL={images.queue["image 3"]} caption="Applications of Queue - GeeksforGeeks"
                    link="https://www.geeksforgeeks.org/dsa/applications-advantages-and-disadvantages-of-queue/" />

                    <Heading heading={"Real-time application of Queue:"} />
                    <Bullet
                    items={[
                        "Working as a buffer between a slow and a fast device. For example keyboard and CPU, and two devices on network.",
                        "ATM Booth Line",
                        "Ticket Counter Line"
                    ]} />

                    <Heading heading={"Advantages of Queue:"} />
                    <Bullet
                    items={[
                        "Queues are useful when a particular service is used by multiple consumers.",
                        "Queues are fast in speed for data inter-process communication.",
                        "Queues can be used for the implementation of other data structures."
                    ]} />
                    <Image imageURL={images.queue["image 4"]} caption="Advantages of Queue - GeeksforGeeks"
                    link="https://www.geeksforgeeks.org/dsa/applications-advantages-and-disadvantages-of-queue/" />

                    <Heading heading={"Disadvantages of Queue:"} />
                    <Bullet
                    items={[
                        "The operations such as insertion and deletion of elements from the middle are time consuming.",
                        "In a classical queue, a new element can only be inserted when the existing elements are deleted from the queue.",
                        "Searching an element takes O(N) time.",
                        "Maximum size of a queue must be defined prior in case of array implementation."
                    ]} />

            </section>

            <QueueVisualizer />


            <References references={algorithmsReferences.queue} />
        </div>
    );
};

export default Queue;