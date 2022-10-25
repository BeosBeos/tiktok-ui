import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9b8ad78bc0695f5969d45fbd89261e29~c5_100x100.jpeg?x-expires=1666785600&x-signature=KwzGhdGU8Ix0XVjZxLV8p4MKRa4%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Tra.dang.904</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <h4 className={cx('name')}>Trà đặng</h4>
            </div>

            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
