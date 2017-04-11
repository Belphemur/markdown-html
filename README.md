# markdown-html-fixed [![NPM version](https://badge.fury.io/js/markdown-html-fixed.svg)](http://badge.fury.io/js/markdown-html-fixed) [![Build Status](https://travis-ci.org/Belphemur/markdown-html.svg?branch=master)](https://travis-ci.org/Belphemur/markdown-html)

## Information

<table>
<tr> 
<td>Package</td><td>markdown-html-fixed</td>
</tr>
<tr>
<td>Description</td>
<td>Command line markdown to html conversion. You can supply your own template (mustache), styles and scripts.</td>
</tr>
<tr>
<td>Node Version</td>
<td>&ge; 0.10 & 5 & 6 </td>
</tr>
</table>

## Install

To use globally from the command line:
    
    npm install markdown-html-fixed -g

## Usage

Basic usage: 
    
    markdown-html in.md -o out.html


Use in watch mode for maximum pleasure:

    markdown-html -w in.md -o out.html


List of options:

    --title, -t        Generated page title
    --style, -s        Path to custom stylesheet
    --script, -j       Path to custom javascript                    
    --template, -l     Path to custom mustache template
    --help, -h         This screen
    --output-file, -o  Path to output file (stdout if not specified)
    --stdin, -i        If set, stdin will be used instead of file
    --watch, -w        Watch mode
