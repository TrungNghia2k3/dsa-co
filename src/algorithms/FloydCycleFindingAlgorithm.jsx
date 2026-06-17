// Components
import { Bullet, Paragraph, TableOfContents, Title, References } from '../components';

// Assets
import { algorithmsReferences } from '../assets/data/algorithmsReferences.js';

const FloydCycleFindingAlgorithm = () => {
    return (
        <>
            <Paragraph content={"Floyd's cycle finding algorithm or Hare-Tortoise algorithm is a pointer algorithm that uses only two pointers, moving through the sequence at different speeds. This algorithm is used to find a loop in a linked list. It uses two pointers one moving twice as fast as the other one. The faster one is called the fast pointer and the other one is called the slow pointer."} />

            <Bullet
                heading={"While traversing the linked list one of these things will occur:"}
                items={
                    [
                        "The Fast pointer may reach the end (NULL) which shows that there is no loop in the linked list.",
                        "The Fast pointer again catches the slow pointer at some time therefore a loop exists in the linked list."
                    ]
                }
            />

            <TableOfContents items={[
                { id: 'introduction', title: 'Floyd’s Cycle Finding Algorithm' },
                { id: 'how-it-works', title: 'How does Floyd’s Algorithm work?' },
                { id: 'advantages', title: 'Advantages' },
            ]}
            />

            <section id="introduction">
                <Title title={"Floyd’s Cycle Finding Algorithm:"} />

                <Bullet 
                    heading={"The idea is to start with the two pointers slow and fast, both starting at the head of the linked list."}
                    items={[
                        {
                            text: "While traversing the List:",
                            subItems: [
                                "slow pointer will move one step at a time.",
                                "fast pointer moves two steps at a time.",
                                "If there's a cycle, the fast pointer will eventually catch up with the slow pointer within the cycle because it's moving faster.",
                                "If there's no cycle, the fast pointer will reach the end of the list (i.e., it will become NULL)."
                            ]
                        },
                        "When the slow and fast pointers meet, a cycle or loop exists."
                    ]}
                />
            </section>

            <section id="how-it-works">
                <Title title={"How does Floyd’s Algorithm work?"} />

                <Paragraph content={"The algorithm is to start two pointers, slow and fast from head of linked list. We move slow one node at a time and fast two nodes at a time. If there is a loop, then they will definitely meet."} />

                <Bullet 
                    heading={"This approach works because of the following facts :"}
                    items={[
                        "When slow pointer enters the loop, the fast pointer must be inside the loop.",
                        "if we consider movements of slow and fast pointers, we can notice that distance between them (from slow to fast) increase by one after every iteration.",
                    ]}
                />

                <Paragraph content={"After each iteration where the slow pointer moves one step forward and the fast pointer moves two steps forward, the distance between the two pointers increases. Initially, if the slow pointer is at a distance k from a certain point in the cycle, then after one iteration, the distance between the slow and fast pointers becomes k+1. After two iterations, this distance becomes k+2 and so on. As they continue to move within the cycle, this distance will eventually equal the cycle length n. At this point, since the distance wraps around the cycle and both pointers are moving within the same cycle, they will meet."} />
            </section>

            <section id="advantages">
                <Title title={"Advantages"} />
                <Bullet 
                    items={[
                        "It avoids the need for extra space (like a hash table) to keep track of visited nodes, making it very memory efficient.",
                        "This algorithm can also be adapted to find the middle element of a linked list."
                    ]}
                />
            </section>

            <References references={algorithmsReferences.floyds_cycle_finding_algorithm
            } />
        </>
    );
};

export default FloydCycleFindingAlgorithm;