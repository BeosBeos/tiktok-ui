import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0cb8a11408c037e9760f6b9733802655~c5_720x720.jpeg?x-expires=1666346400&x-signature=%2B3EOyNpG%2FCQGM7uCprUpP9TJL1Q%3D"
                alt="Thông"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Beos</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Mạnh Quang Thông</span>
            </div>
        </div>
    );
}

export default AccountItem;
