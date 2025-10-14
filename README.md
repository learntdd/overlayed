# OBS Overlay with Animated Images

This is a simple OBS overlay that displays animated images.

## Setup

1.  **Clone this repository.**
2.  **Add your images.** Place your animated GIF files in the `img` directory.
3.  **Generate the image list.** Before using the overlay, run the following command in your terminal to create a list of your images:

    ```bash
    python generate_image_list.py
    ```

4.  **Add the overlay to OBS.**
    *   In OBS, add a new "Browser" source.
    *   Check "Local file".
    *   Browse to the `index.html` file in this repository.
    *   Set the "Width" and "Height" to your desired dimensions.
    *   Click "OK".

## Usage

The overlay will automatically cycle through the images in the `img` directory, changing every 5 seconds. If you add or remove images, you will need to run the `python generate_image_list.py` command again.
