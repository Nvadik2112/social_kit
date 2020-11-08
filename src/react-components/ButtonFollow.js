import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const ButtonFollow = styled(Button)({
    position:'relative',
    fontFamily: 'Netflix Sans Medium',
    background: 'rgba(242, 242, 242, 0.1)',
    '&:hover': {
        background: "#cd853f",
    },
    borderRadius: '40px',
    color: 'white',
    height: '24px',
    minWidth: '50px',
    paddingLeft: '12',
    fontWeight: "400",
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease-out',
    fontSize: '14px',
    lineHeight: '18px'
    
});
export default ButtonFollow;

