---
title: Structural Role Discovery in the Erasmus Exchange Network
order: 1
description: Discovering structural roles in the Erasmus student exchange network using RolX and Python.
---

## Introduction

The Erasmus program connects universities across Europe through thousands of student exchanges each year. Analyzing the roles that universities play in this network offers another perspective on the program's structure and can help identify areas for improvement.

In this project, we apply **RolX**, a structural role discovery algorithm, to the Erasmus exchange network. We examine the resulting roles through network metrics and connectivity patterns, then interpret them using examples of institutions in Stockholm.

## Data

We use the [Erasmus mobility dataset](https://data.mendeley.com/datasets/vnxdvh6998/3) published by L. Gadár et al. on Mendeley Data. Our analysis focuses on student mobility: vertices represent participating institutions, and edges represent student exchanges between them.

<figure>
  <img src="/images/projects/data-mining/erasmus-network.png" alt="Overview of the Erasmus exchange network." />
  <figcaption>Overview of the Erasmus exchange network.</figcaption>
</figure>

<div class="figure-row">
  <figure>
    <img src="/images/projects/data-mining/circular-network.png" alt="Figure 1. Circular plot of 10% of the network." />
    <figcaption>Figure 1. Circular plot of 10% of the network.</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/data-mining/spring-network.png" alt="Figure 2. Spring plot of 10% of the network." />
    <figcaption>Figure 2. Spring plot of 10% of the network.</figcaption>
  </figure>
</div>

<figure>
  <img src="/images/projects/data-mining/role-connectedness.png" alt="Figure 3. Internal connectedness of individual roles, with 100 nodes selected for each role." />
  <figcaption>Figure 3. Internal connectedness of individual roles, with 100 nodes selected for each role.</figcaption>
</figure>

<figure>
  <img src="/images/projects/data-mining/node-sense.png" alt="Figure 4. NodeSense analysis of network metrics for each role." />
  <figcaption>Figure 4. NodeSense analysis of network metrics for each role.</figcaption>
</figure>

<figure>
  <img src="/images/projects/data-mining/neighbor-sense.png" alt="Figure 5. NeighborSense analysis of connectivity between roles." />
  <figcaption>Figure 5. NeighborSense analysis of connectivity between roles.</figcaption>
</figure>

## Role Interpretation

We interpret the four discovered roles using node metrics and connections between roles. Institutions in Stockholm provide concrete examples of how these structural patterns relate to participation in the Erasmus program.

### Role 1: Central institutions

Role 1 represents **central, highly connected institutions**. These nodes have high PageRank, degree, and betweenness, together with low eccentricity (Figure 4). They also connect extensively to institutions in other roles (Figure 5).

We interpret this role as representing large, influential, internationally oriented universities. Inspecting the institutions assigned to this role supports that interpretation. Stockholm examples include KTH, Stockholm University, and Karolinska Institute.

### Role 2: Smaller and locally oriented institutions

Role 2 has low PageRank, betweenness, and degree, with average closeness and eccentricity (Figure 4). These institutions are less central than those in Role 1, but are not completely peripheral. This is also the **largest group** in the network (Figure 1).

We interpret this role as representing smaller or more locally oriented institutions with more limited participation in Erasmus exchanges. Stockholm examples include Lärarhögskolan Stockholm and the Stockholm School of Economics (SSE).

SSE may initially seem surprising given its prominence. One possible explanation is that business schools also participate in management-focused exchange programs, so their broader international activity may not be fully reflected in the Erasmus network.

### Role 3: Low-participation institutions

Role 3 resembles Role 2, but has lower closeness and higher eccentricity (Figure 4). It also has very low connectivity both within its own role and to other roles (Figure 5). It is the **smallest group** in the network.

We interpret this role as representing institutions with limited participation in the program, sending or receiving few students. A Stockholm example is the Swedish School of Sport and Health Sciences.

### Role 4: Specialized clusters

Role 4 has low average betweenness, high closeness and eccentricity, and average PageRank and degree (Figure 4). Its connectivity pattern helps explain this combination: institutions connect strongly to others in the same role, but have relatively few connections to other roles (Figure 5). They form a **largely isolated cluster** within the network.

Inspecting these institutions reveals that many are art schools, dance schools, and conservatories. Their exchanges appear to concentrate among institutions with similar specializations. Stockholm examples include Dramatiska Högskola, Dans och Cirkushögskolan, and Kungliga Musikhögskolan.
