---
title: Drone Obstacle Avoidance Using SURF
order: 2
description: Real-time detection of approaching obstacles using SURF feature matching and template matching.
---

## Abstract

Unmanned aerial vehicles (UAVs) are becoming increasingly popular, from capturing videos at events to supporting industrial inspections. In this project, we examine the problem of detecting obstacles directly in front of a vehicle.

We combine SURF feature matching with template matching to compare relative obstacle sizes across images captured at different intervals. The method matches keypoints in consecutive images and compares the size of the region around each keypoint to determine whether the camera is approaching an obstacle. When an obstacle gets too close, it triggers avoidance.

The entire procedure runs in real time with a low-resolution camera and a commercial laptop.

## Motivation

Drones give us a bird’s-eye view and enable us to see the world from a new perspective. Beyond aerial photography, they can support search and rescue in areas that are difficult for humans to traverse. They can also inspect wind farms and power plants, where inspections could be dangerous for people.

<!-- Original image: drone applications. The supplied URL returns HTTP 403; replace with a local image when available.
https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a2be3193-48df-4ea1-afda-d5697b0d48ec/Untitled.png
-->

Obstacle avoidance is essential for UAVs to reach their destinations successfully. These applications require reliable techniques for detecting and avoiding obstacles. Optical flow is a common approach, but avoiding obstacles directly ahead, especially narrow objects, can be difficult. This motivated us to implement and improve an obstacle avoidance method for drones.

## Methods

A size expansion cue helps detect obstacles in front of the vehicle: as the camera approaches an object, the object appears larger in successive images. We use this change in scale to identify potential collisions.

<!-- Original image: size expansion cue.
https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00b157ae-6ee5-4572-afae-45d54b991edd/Untitled.png
-->

### Keypoint extraction and matching

First, we generate SURF keypoints and match them across consecutive images. These features provide initial locations for detecting relative changes in size. SURF keypoints can be matched even when their scale changes, and SURF is faster to calculate than SIFT.

<!-- Original image: SURF keypoints matched in consecutive images.
https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e1904d0-bf94-4896-8857-f06b1772ea6a/Untitled.png
-->

We discard mismatched features. After creating the SURF matches, we also discard keypoints whose scale stays the same or becomes smaller, keeping only those that have grown.

<!-- Original image: discarded mismatched features.
https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3de45bd2-c80a-44f0-bad2-898c662413f4/Untitled.png
-->

<!-- Original image: discard keypoints that become smaller or stay the same size.
https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e3767cc-9150-4cc4-aacc-dd92c44e0204/Untitled.png
-->

### Confirming scale changes with template matching

Template matching compares a template from one frame with the next. It uses a region around each keypoint, defined by the SURF feature scale, to calculate how well the features match at different scales.

If the template-matching correlation distance does not change between the original scale (1.0) and the best-matched scale, we discard the keypoint because it is likely to have a homogeneous texture.

<!-- Original image: template matching.
https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ece2e8dd-a8ea-4451-80b1-969f874ed840/Untitled.png
-->

This process confirms the expansion ratio of SURF keypoints and identifies groups of expanding keypoints. When the scale expansion detector identifies an approaching obstacle in flight, the UAV avoids the frontal obstacle autonomously.

<!-- Original image: expanding SURF keypoint detection.
https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e072b0a2-9662-4070-89d8-581c76d2e55c/Untitled.png
-->

## Results

In our experiment, the vehicle flies sideways when an obstacle is found in its field of view. The method requires no prior learning to detect approaching obstacles and runs in real time with a low-resolution camera and a regular laptop.
