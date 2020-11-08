import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const ButtonMessage = styled(Button)({
    fontFamily: 'Netflix Sans Medium',
    backgroundColor: '#5458F7',
    '&:hover': {
        background: "#8b00ff",
    },
    borderRadius: '40px',
    color: '#FFFFFF',
    height: '24px',
    width: '134px',
    paddingTop: '4',
    fontWeight: "500",
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease-out',
    fontSize: '14px',
    lineHeight: '18px'
});
export default ButtonMessage;

