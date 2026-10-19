---
# About page. The text below the second "---" line is our history.
# Subteams come from _data/subteams.yml, people from _data/officers.yml,
# and the timeline from _data/timeline.yml.
layout: about
title: About
permalink: /about/
description: >-
  The story of Bruin Tapeout, UCLA's undergraduate chip design team, and the
  three subteams that design, verify, and lay out our chips.
hero:
  kicker: About us
  title: We learn to build chips by building them.
  lead: >-
    Bruin Tapeout takes students from a design specification to a fabricated
    chip using industry-standard tools.
values_title: How we work
values:
  - title: Learn by taping out
    text: Every concept we teach is in service of a real chip. Nothing beats sending your own design to the fab.
  - title: Use industry tools
    text: Members learn the flow industry chip teams use, from SystemVerilog to Cadence Genus and Innovus.
  - title: Build a community
    text: We're growing a community of student chip designers ready for careers in architecture, silicon engineering, and VLSI.
people_title: Leadership
---

## Our story

Most students who study digital design never see their work leave a
simulator. Taping out a chip has traditionally happened in graduate research
labs or in industry, after years of training.

Bruin Tapeout was founded at UCLA in **spring 2026** to change that. We take
students from a design specification to a fabricated chip using
industry-standard tools, and we learn the flow by actually doing it.

Our first project was a **modified 8-bit RISC-V CPU**, with a tiny register
file, eight ALU operations, and an SPI interface so a microcontroller can load
programs and read back results. The team designed it in SystemVerilog, built
testbenches to prove it worked, and hardened it into a layout. In
**September 2026** it was taped out on SkyWater 130 nm through
[Tiny Tapeout](https://tinytapeout.com), and it's being fabricated now.

This fall, more than 40 undergraduates joined our pilot program to learn the
full flow, from RTL through verification, synthesis, and place and route.
Members join one of three subteams, organized the way industry chip teams are,
and in our fall capstone, teams of three design their own CPU and instruction
set for a Tiny Tapeout submission. We're now 50+ members, and some have
already turned their experience into internships at companies like NVIDIA.

Next, we're taking on our first full-scale tapeout: a low-power SoC on
TSMC 65 nm through Muse Semiconductor. It's many times larger than our first
chip and much closer to a real product tapeout.
