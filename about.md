---
# About page. The text below the "---" line is our history.
# Subteams come from _data/subteams.yml, officers from _data/officers.yml,
# and the timeline from _data/timeline.yml.
layout: about
title: About
permalink: /about/
description: >-
  The story of Bruin Tapeout, UCLA's student chip-design team, and the three
  subteams (RTL Design, Verification, and Physical Design) that make our chips.
hero:
  eyebrow: About us
  title: We learn to build chips by building them.
  lead: >-
    Bruin Tapeout is a student team at UCLA that takes designs all the way from
    an idea to a chip you can hold.
values_title: How we do things
values:
  - title: Learn by taping out
    text: Every concept we teach is in service of a real chip. Nothing beats watching your own design go to the fab.
  - title: Use real tools
    text: Members train on the same flow and tools used in industry, from SystemVerilog to Cadence Genus and Innovus.
  - title: Teach each other
    text: Our wiki, assignments, and code are written by members, for members, and they're open on GitHub.
---

## Our story

Most students who study digital design never see their work leave a simulator.
Taping out a chip, the moment a finished layout is sent off to be manufactured,
has traditionally happened in graduate research labs or in industry, after
years of training.

Bruin Tapeout was founded in **spring 2026** as a project under
[IEEE at UCLA](https://ieeebruins.com) to change that. The idea was simple:
learn the tapeout flow by actually doing it. Instead of waiting for the perfect
project, our founding team picked something achievable and started writing RTL.

That first project became an **8-bit, RISC-V-inspired CPU**, with a tiny
register file, eight ALU operations, and an SPI interface so a microcontroller
can load programs and read back results. Over the spring and summer, the team
designed it in SystemVerilog, built testbenches to prove it worked, and hardened
it into a layout through [Tiny Tapeout](https://tinytapeout.com). It shipped on
the SKY26c shuttle, making it our first taped-out chip, and it's being
fabricated now.

Shipping a chip showed us how much there is to learn, and how much more fun it
is to learn it together. In **fall 2026** we reorganized into three subteams
that mirror the stages of a real ASIC flow: **RTL Design**, **Verification**,
and **Physical Design**. Members now train on industry-standard tools, including
Cadence Genus for synthesis and Innovus for place and route, and we've grown to
more than 50 members.

Our goal hasn't changed. Every member should leave knowing how a chip actually
gets made, because they helped make one.
