import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
function ImgList() {
  return (
    <ImageList
    sx={{ width: 700, height: 450 }}
    variant="quilted"
    cols={4}
    rowHeight={108}
  >
    {itemData.map((item) => (
      <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
        <img
          {...srcset(item.img, 121, item.rows, item.cols)}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  )
}

export default ImgList

const itemData = [
    {
      img: 'https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'drops',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.pexels.com/photos/12585207/pexels-photo-12585207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'drops',
      rows: 2,
    },
    {
      img: 'https://images.pexels.com/photos/3683102/pexels-photo-3683102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'drops',
      rows: 2,
    },
    {
      img: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'drops',
      rows: 2,
      cols: 4,
    },
   
  ];