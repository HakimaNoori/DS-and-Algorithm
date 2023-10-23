function getRctArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  console.log(getRctArea(23, 4))
  console.log(getRctArea(-3, 4))
  console.log(getRctArea(13, 14))
  console.log(getRctArea(-3, -4))