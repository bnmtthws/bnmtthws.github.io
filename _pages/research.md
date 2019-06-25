---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: category
defaults:
  # _pages
  - scope:
      path: ""
      type: pages
    values:
      layout: single
      author_profile: false
permalink: /research/

feature_row:
  - image_path: /assets/images/research-behavior.jpg
    alt: "Mosquito behavior"
    title: "Mosquito behavior"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#mosquito-behavior"
  - image_path: /assets/images/research-sensory.jpg
    alt: "Mosquito sensory biology"
    title: "Mosquito sensory biology"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#sensory-biology"
    #btn_label: "Read More About Our Research Interests"
    #btn_class: "btn--inverse"
  - image_path: /assets/images/research-genomics.jpg
    alt: "Genomics and evolution"
    title: "Genomics and evolution"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "#genomics-evolution"

---

![mosquito on arm](/assets/mosquito.jpg)

{% include feature_row %}

