import data from '@/public/members.json';

export default function handler(req, res) {
	res.status(200).json(data);
}
