#!/bin/bash

# Run tag generator script
echo "Generating tag pages..."
python3 _pages/tag_generator.py

# Add any other pre-build steps here

echo "Pre-build processing completed." 