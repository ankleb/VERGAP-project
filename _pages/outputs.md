---
title: Outputs
permalink: /outputs/
description: Publications, datasets, releases and other deliverables
---

{%- comment -%}
  The list below comes from _bibliography/outputs.bib.
  To add an item: on its Zenodo page, choose Export → BibTeX, and paste the
  result into outputs.bib. Add  keywords = {deliverable}  or  keywords = {publication}
  to choose the heading it appears under.
{%- endcomment %}

## Deliverables and releases

{% bibliography --file outputs --query @*[keywords~=deliverable] --group_by none %}

## Publications

{% bibliography --file outputs --query @*[keywords~=publication] --group_by none %}

## Talks and presentations

{% bibliography --file outputs --query @*[keywords~=talk] --group_by none %}
